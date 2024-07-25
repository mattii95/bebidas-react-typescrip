import { useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"

export default function Header() {
    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])

    return (
        <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="Logotipo" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink 
                            to="/" 
                            className={({isActive}) => isActive ? 'text-orange-600 uppercase font-bold' : 'text-white uppercase font-bold'}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/favorites" 
                            className={({isActive}) => isActive ? 'text-orange-600 uppercase font-bold' : 'text-white uppercase font-bold'}
                        >
                            Favorites
                        </NavLink>
                    </nav>
                </div>

                {isHome && (
                    <form
                        className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                    >
                        <div className="space-y-4">
                            <label 
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >
                                Name or Ingredients: 
                            </label>
                            <input 
                                id="ingredient"
                                type="text" 
                                name="ingredient"
                                className="p-3 w-full rounded-lg focus:outline"
                                placeholder="Name or Ingredient. Example: Fernet, Coffe"
                            />
                        </div>
                        <div className="space-y-4">
                            <label 
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >
                                Category: 
                            </label>
                            <select 
                                id="ingredient"
                                name="ingredient"
                                className="p-3 w-full rounded-lg focus:outline"
                            >
                                <option value="">-- Please Select --</option>
                            </select>
                        </div>
                        <input 
                            type="submit" 
                            value="Search Recipe" 
                            className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full rounded-lg uppercase p-2"
                        />
                    </form>
                )}
            </div>
        </header>
    )
}
