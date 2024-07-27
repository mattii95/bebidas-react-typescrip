import { StateCreator } from 'zustand'
import { Recipe } from '../types'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice'
import { createNotificationsSlice, NotificationSliceType } from './notificationSlice'

export type FavoritesSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe: Recipe) => void,
    favoriteExists: (id: Recipe['idDrink']) => boolean,
    loadFromStorage: () => void
}

/** 
 *  StateCreator<FavoritesSliceType & RecipesSliceType, [], [], FavoritesSliceType> manera de anidar con otro silce para acceder a sus metodos
 */
export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationsSlice(set, get, api).showNotification({text: 'Se elimino de favoritos', error: false})
        } else {
            set((state) => ({
                favorites: [
                    ...state.favorites,
                    recipe
                ]
            }))
            createNotificationsSlice(set, get, api).showNotification({text: 'Se agrego a favoritos', error: false})
        }
        createRecipesSlice(set, get, api).closeModal()
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if (storedFavorites) {
            set(() => ({
                favorites: JSON.parse(storedFavorites)
            }))
        }
    }
})