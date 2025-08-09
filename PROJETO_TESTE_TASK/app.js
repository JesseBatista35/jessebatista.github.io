// Crie um script simples para extrair listagens de produtos da Amazon da primeira página de resultados de pesquisa para uma determinada palavra-chave.
// Usar JSDOM para analisar o conteúdo HTML e extrair os seguintes detalhes de cada listagem de produto na primeira página:
// - Título do produto
// - Avaliação do produto (se disponível)
// - Número de avaliações (se disponível)
// - URL da imagem do produto
// - URL do produto
// - Preço do produto (se disponível)
// - Descrição do produto (se disponível)
// - Marca do produto (se disponível)
// - Disponibilidade do produto (se disponível)
// - Data de lançamento do produto (se disponível)
// Implementar um endpoint de API que aceita uma palavra-chave como parâmetro de consulta e retorna os dados extraídos em formato JSON.
// Criar uma página HTML simples com um formulário de pesquisa onde o usuário pode inserir uma palavra-chave.
// Ao enviar o formulário, fazer uma requisição AJAX para o endpoint /api/scrape com a palavra-chave fornecida.
// Exibir os resultados da pesquisa em uma lista, mostrando o título do produto, avaliação, número de avaliações e imagem do produto.
// Adicionar estilos básicos com CSS para tornar a página visualmente agradável.

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public")); // Serve static files from the 'public' directory

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get("/api/scrape", async (req, res) => {
  const keyword = req.query.keyword;
  if (!keyword) {
    return res.status(400).json({ error: "Keyword is required" });
  }

  try {
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const products = [];

    $(".s-main-slot .s-result-item").each((index, element) => {
      const title = $(element).find("h2 a span").text().trim();
      const rating = $(element).find(".a-icon-alt").text().trim();
      const reviewsCount = $(element).find(".a-size-base").text().trim();
      const imageUrl = $(element).find("img.s-image").attr("src");
      const productUrl = $(element).find("h2 a").attr("href");
      const price = $(element).find(".a-price .a-offscreen").text().trim();
      const brand = $(element).find(".s-brand-name").text().trim();
      const availability = $(element).find(".a-color-success").text().trim();

      if (title && productUrl) {
        products.push({
          title,
          rating,
          reviewsCount,
          imageUrl,
          productUrl: `https://www.amazon.com${productUrl}`,
          price,
          brand,
          availability,
        });
      }
    });

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to scrape data" });
  }
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.use(express.static("public")); // Serve static files from the 'public' directory
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/api/scrape", async (req, res) => {
  const keyword = req.query.keyword;
  if (!keyword) {
    return res.status(400).json({ error: "Keyword is required" });
  }

  try {
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const products = [];

    $(".s-main-slot .s-result-item").each((index, element) => {
      const title = $(element).find("h2 a span").text().trim();
      const rating = $(element).find(".a-icon-alt").text().trim();
      const reviewsCount = $(element).find(".a-size-base").text().trim();
      const imageUrl = $(element).find("img.s-image").attr("src");
      const productUrl = $(element).find("h2 a").attr("href");
      const price = $(element).find(".a-price .a-offscreen").text().trim();
      const brand = $(element).find(".s-brand-name").text().trim();
      const availability = $(element).find(".a-color-success").text().trim();

      if (title && productUrl) {
        products.push({
          title,
          rating,
          reviewsCount,
          imageUrl,
          productUrl: `https://www.amazon.com${productUrl}`,
          price,
          brand,
          availability,
        });
      }
    });

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to scrape data" });
  }
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.use(express.static("public")); // Serve static files from the 'public' directory
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/api/scrape", async (req, res) => {
  const keyword = req.query.keyword;
  if (!keyword) {
    return res.status(400).json({ error: "Keyword is required" });
  }

  try {
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const products = [];

    $(".s-main-slot .s-result-item").each((index, element) => {
      const title = $(element).find("h2 a span").text().trim();
      const rating = $(element).find(".a-icon-alt").text().trim();
      const reviewsCount = $(element).find(".a-size-base").text().trim();
      const imageUrl = $(element).find("img.s-image").attr("src");
      const productUrl = $(element).find("h2 a").attr("href");
      const price = $(element).find(".a-price .a-offscreen").text().trim();
      const brand = $(element).find(".s-brand-name").text().trim();
      const availability = $(element).find(".a-color-success").text().trim();

      if (title && productUrl) {
        products.push({
          title,
          rating,
          reviewsCount,
          imageUrl,
          productUrl: `https://www.amazon.com${productUrl}`,
          price,
          brand,
          availability,
        });
      }
    });

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to scrape data" });
  }
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
