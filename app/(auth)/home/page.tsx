"use client";

import { PedidoCard } from "@/components/core/pedido-carde";
import { Bell, LayoutDashboard, Briefcase, Users, Settings, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import pedidocard from "@/utils/db";
import Navbar from "@/components/grupo/navebar";
import { parseCookies } from "nookies";

const HomePage = () => {
    const { user, token } = parseCookies()
    // console.log("user", user)

    const userdata = JSON.parse(user)

    console.log("userdata", userdata)
    // console.log("token", token)
    console.log("user id", userdata.id)
    // console.log("user name", userdata.user.name)

    const orcamentopaloud = {
        id_utilizador: userdata.id
    }
    // console.log("orcamentopaloud", orcamentopaloud)




    return (
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <div className="m-10  ">
                <Navbar />
            </div>
            {/* Top Navigation - Fica no topo de tudo */}
            <header className="h-16 sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between shadow-sm">
                {/* Lado Esquerdo: Logo */}
                <div className="flex items-center gap-4 min-w-[200px]">
                    <h1 className="text-xl font-bold  dark:text-white hidden sm:block">Smart Find</h1>
                </div>

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
                            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500/50 transition-all outline-none"
                        />
                    </div>
                </div>

                {/* Lado Direito: Perfil e Notificações */}
                <div className="flex items-center gap-4 min-w-[120px] justify-end">
                    <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                    </button>
                    <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-slate-800">
                        SD
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar - Começa abaixo do header e não sobrepõe */}
                <aside className="w-64  border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden lg:flex flex-col">

                    <Card className="flex p-4 space-y-1 m-2">
                        <button className="flex items-center w-full p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl font-medium">
                            <LayoutDashboard size={20} className="mr-3" />
                            Dashboard
                        </button>
                        <button className="flex items-center w-full p-3 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
                            <Briefcase size={20} className="mr-3" />
                            Serviços
                        </button>
                        <button className="flex items-center w-full p-3 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
                            <Users size={20} className="mr-3" />
                            Clientes
                        </button>
                        <button className="flex items-center w-full p-3 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
                            <Settings size={20} className="mr-3" />
                            Configurações
                        </button>
                    </Card>
                    <Card className="p-flex p-4 space-y-1 m-2">
                        <h1 className="font-bold">Rating</h1>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="m-2" /> ⭐⭐⭐⭐⭐ 4.0
                        </div>
                    </Card>
                </aside>

                {/* Main Content - Toma todo o espaço que resta */}
                <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 p-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Welcome Banner */}
                        <div className="mb-10">
                            <Card className="relative overflow-hidden h-[200px] flex items-center justify-center bg-blue-600 border-none">
                                <Image
                                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070"
                                    alt="Office Banner"
                                    fill
                                    className="object-cover opacity-30"
                                />
                                <div className="relative text-center">
                                    <p className="text-blue-100 font-medium mb-1">Bem-vindo ao seu painel</p>
                                    <h2 className="text-4xl font-black text-white tracking-tight">Smart Find Dashboard</h2>
                                </div>
                            </Card>
                        </div>

                        {/* Pedidos Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {pedidocard.map((pedido) => (
                                <PedidoCard
                                    key={pedido.id}
                                    title={pedido.title}
                                    description={pedido.description}
                                    price={pedido.price}
                                    image={pedido.image}
                                    category={{
                                        id: pedido.category.id,
                                        name: pedido.category.name,
                                        icon: pedido.category.icone
                                    }}
                                />
                            ))}
                        </div>


                    </div>
                </main>
            </div>
        </div>
    );
};

export default HomePage;
