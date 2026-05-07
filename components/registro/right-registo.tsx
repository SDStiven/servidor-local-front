"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { toast } from "sonner"
import Link from "next/link"




export const RightSection = () => {

    const [nome, setNome] = useState("")
    const [numeroIdentificacao, setNumeroIdentificacao] = useState("")
    const [dataNascemento, setDataNascemento] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [pais, setPais] = useState("")
    const [localidade, setLocalidade] = useState("")
    const [password, setPassword] = useState("")
    const [enable, setEnable] = useState("")

    const changeNome = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setNome(e.target.value)
        } else {
            setNome("")
        }
    }
    const changeNumeroIdentificacao = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setNumeroIdentificacao(e.target.value)
        } else {
            setNumeroIdentificacao("")
        }
    }
    const changeDataNascemento = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setDataNascemento(e.target.value)
        } else {
            setDataNascemento("")
        }
    }
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setEmail(e.target.value)
        } else {
            setEmail("")
        }
    }
    const changeTelefone = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setTelefone(e.target.value)
        } else {
            setTelefone("")
        }
    }
    const changePais = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPais(e.target.value)
        } else {
            setPais("")
        }
    }
    const changeLocalidade = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setLocalidade(e.target.value)
        } else {
            setLocalidade("")
        }
    }
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPassword(e.target.value)
        } else {
            setPassword("")
        }
    }
    const changeEnable = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setEnable(e.target.value)
        } else {
            setEnable("")
        }
    }

    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8080/user/create",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nome: nome,
                    numero_identificacao: numeroIdentificacao,
                    data_nascemento: dataNascemento,
                    email: email,
                    role: "cliente",
                    telefone: telefone,
                    pais: pais,
                    localidade: localidade,
                    password: password,
                    enabled: true
                })
            })

        if (response.status === 200) {
            toast.success("Utilizador criado com sucesso!");
            if (typeof window !== "undefined") {
                window.location.href = "/login"
            }
        } else {
            toast.error("não foi possivel redirecionar para o login,tente novamente mais tarde!")
        }


    }

    return (
        <div className="w-1/2 ">
            <Card className="h-full flex flex-col justify-center px-14 m-10">
                <CardHeader>
                    <span className="text-5xl font-bold">Registo</span>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label>Nome</Label>
                            <Input
                                type="text"
                                value={nome}
                                onChange={changeNome}
                                placeholder="Digite o nome"

                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Numéro de Identificação</Label>
                            <Input
                                type="text"
                                value={numeroIdentificacao}
                                onChange={changeNumeroIdentificacao}
                                placeholder="Digite o numéro de identificação"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Data de Nascemento</Label>
                            <Input
                                type="text"
                                value={dataNascemento}
                                onChange={changeDataNascemento}
                                placeholder="01-02-2000"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Email</Label>
                            <Input
                                type="text"
                                value={email}
                                onChange={changeEmail}
                                placeholder="Digite o email"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Telefone</Label>
                            <Input
                                type="text"
                                value={telefone}
                                onChange={changeTelefone}
                                placeholder="Digite o telefone"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label>Pais</Label>
                            <Input
                                type="text"
                                value={pais}
                                onChange={changePais}
                                placeholder="Digite o pais"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Localidade</Label>
                            <Input
                                type="text"
                                value={localidade}
                                onChange={changeLocalidade}
                                placeholder="Digite a localidade"

                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Password</Label>
                            <Input
                                type="password"
                                value={password}
                                onChange={changePassword}
                                placeholder="Digite a senha"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Enable</Label>
                            <Input
                                type="text"
                                value={enable}
                                onChange={changeEnable}
                                placeholder="true ou false"
                            />
                        </div>

                        <Button
                            onClick={handleRegister}
                            className="bg-[#13a4ec] w-full font-bold  py-3 drop-shadow-lg drop-shadow-gray-200"
                        >Enviar</Button>
                        <div className="text-center 
                        
                         ">
                            <span>Already have an account? </span>
                            <Link href="/login" className="text-[#13a4ec]">Login</Link>

                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}