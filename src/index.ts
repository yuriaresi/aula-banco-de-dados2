import { PrismaClient } from "@prisma/client";

import express, { Request, Response } from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3333, () => {
    console.log("A API está rodando!- http://localhost:3333");
});

const repository = new PrismaClient();


app.get("/usuarios", async (req: Request, res: Response) => {

    //1- entrada
    //NADA

    //2- processamento
    const usuarios = await repository.usuario.findMany();

    //3- saida

    return res.status(200).send(
        {
            ok: true,
            message: "Usuario listados com sucesso",
            data: usuarios
        }
    );

});

app.post("/usuarios", async (req: Request, res: Response) => {
    //1- entrada

    const { nome, sobrenome, tipo } = req.body;

    if(!nome || !sobrenome || !tipo) {
       return res.status(400).send({
            ok:false,
            message:"Preencha todos os campos"
        })
    }

    //2- processamento
    await repository.usuario.create({
        data: {
            nome,
            sobrenome,
            tipo,
        },
    })
    //3- saida
    return res.status(201).send(
        {
            ok: true,
            message: "Usuario criado com sucesso",
            data: nome
        }
    )

})