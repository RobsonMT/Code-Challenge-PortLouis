import * as yup from "yup";

export const contactSchema = yup.object({
  nome: yup
    .string()
    .required("Nome é obrigatório")
    .test(
      "duas-palavras",
      "O nome deve ter pelo menos duas palavras com pelo menos 3 letras cada",
      (value) => {
        if (!value) return false;
        const palavras = value.trim().split(/\s+/);
        return palavras.length >= 2 && palavras.every((p) => p.length >= 3);
      }
    ),
  telefone: yup.string().required("Telefone é obrigatório"),
});
