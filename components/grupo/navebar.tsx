import QuestionIcon from "@/assests/icons/question-icon";
import { Bell, Search } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";


const NaveBar = () => {
    return (

        <header className="h-16  rounded-2xl bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between shadow-sm">
            {/* Lado Esquerdo: Logo */}
            <div className="">
                <QuestionIcon />
            </div>
            <div className="flex items-center gap-4 min-w-[200px]">
                <h1 className="text-xl font-bold  dark:text-white hidden sm:block">Smart Find</h1>
            </div>

            <Drawer direction="left">
                <DrawerTrigger asChild className="md:hidden ">
                    <Button variant="outline">||</Button>
                </DrawerTrigger>
                <DrawerContent className="p-4  max-w-xs">
                    <nav className="flex flex-col gap-6">
                        <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Início</a>
                        <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Serviços</a>
                        <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pedidos</a>
                        <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Ajuda</a>
                    </nav>
                </DrawerContent>

            </Drawer>

            {/* Centro: Pesquisa e Links */}
            <div className="hidden md:flex items-center gap-8 flex-1 justify-center px-4">

                <nav className="flex items-center gap-6 whitespace-nowrap">
                    <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Início</a>
                    <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Serviços</a>
                    <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pedidos</a>
                    <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Ajuda</a>
                </nav>
                <div className="relative w-full max-w-md group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Pesquisar serviços..."
                        className="w-full bg-slate-100 dark:bg-slate-800  rounded-[10px] border-1 border-gray-200 dark:border-gray-800 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500/50 transition-all outline-none"
                    />
                </div>
            </div>

            {/* Lado Direito: Perfil e Notificações */}
            <div className="flex items-center gap-4 min-w-[120px] justify-end">
                <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                </button>
                <div>
                    <QuestionIcon />
                </div>
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-slate-800">
                    SD
                </div>
            </div>
        </header>

    )
}

export default NaveBar;