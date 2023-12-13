-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(60) NOT NULL,
    "sobrenome" VARCHAR(60) NOT NULL,
    "dt_nascimento" TIMESTAMP(3),
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "tipo" CHAR(1) NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" TIMESTAMP(3) NOT NULL,
    "email" TEXT,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);
