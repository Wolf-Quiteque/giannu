document.addEventListener("alpine:init", () => {
  CheckCart();
  Alpine.store("produtos", [
    { id: 1, corte: "Acém", preco: 7688, categoria: "Bovinos" },
    { id: 2, corte: "Agulha", preco: 5938, categoria: "Bovinos" },
    { id: 3, corte: "Alcatra", preco: 11138, categoria: "Bovinos" },
    {
      id: 4,
      corte: "Almondegas Com Tempero",
      preco: 6670,
      categoria: "Bovinos",
    },
    {
      id: 5,
      corte: "Almondegas sem Tempero",
      preco: 6370,
      categoria: "Bovinos",
    },
    { id: 6, corte: "Carne Picada", preco: 6018, categoria: "Bovinos" },
    { id: 7, corte: "Carne Seca", preco: 12000, categoria: "Bovinos" },
    { id: 8, corte: "Chambão", preco: 5938, categoria: "Bovinos" },
    { id: 9, corte: "Coração", preco: 2367, categoria: "Bovinos" },
    { id: 10, corte: "Costela em Tira", preco: 6786, categoria: "Bovinos" },
    { id: 11, corte: "Cachaço", preco: 5938, categoria: "Bovinos" },
    { id: 12, corte: "Costeleta", preco: 6715, categoria: "Bovinos" },
    { id: 13, corte: "Cupim", preco: 5938, categoria: "Bovinos" },
    { id: 14, corte: "Dobrada", preco: 4000, categoria: "Bovinos" },
    { id: 15, corte: "Entrecôte", preco: 12438, categoria: "Bovinos" },
    {
      id: 16,
      corte: "Espetada de Alcatra",
      preco: 13000,
      categoria: "Bovinos",
    },
    { id: 17, corte: "Fígado", preco: 4075, categoria: "Bovinos" },
    { id: 18, corte: "Ganso", preco: 5938, categoria: "Bovinos" },
    {
      id: 19,
      corte: "Hambúrguer Com Tempero",
      preco: 6670,
      categoria: "Bovinos",
    },
    {
      id: 20,
      corte: "Hambúrguer Sem Tempero",
      preco: 6370,
      categoria: "Bovinos",
    },
    { id: 21, corte: "Lombinho", preco: 13941, categoria: "Bovinos" },
    { id: 22, corte: "Maminha", preco: 8550, categoria: "Bovinos" },
    { id: 23, corte: "Mão de Vaca", preco: 1375, categoria: "Bovinos" },
    { id: 24, corte: "Osso Buco", preco: 5470, categoria: "Bovinos" },
    { id: 25, corte: "Osso para Sopa", preco: 1130, categoria: "Bovinos" },
    { id: 26, corte: "Pá", preco: 6150, categoria: "Bovinos" },
    { id: 27, corte: "Peito Alto", preco: 4800, categoria: "Bovinos" },
    { id: 28, corte: "Picanha", preco: 14030, categoria: "Bovinos" },
    { id: 29, corte: "Pojadouro", preco: 7550, categoria: "Bovinos" },
    { id: 30, corte: "Rabadilha", preco: 7550, categoria: "Bovinos" },
    { id: 31, corte: "Rabo de Boi", preco: 5770, categoria: "Bovinos" },
    { id: 32, corte: "T-Bone", preco: 7900, categoria: "Bovinos" },
    { id: 33, corte: "Tomahawk", preco: 12563, categoria: "Bovinos" },
    { id: 34, corte: "Vazia", preco: 11350, categoria: "Bovinos" },
    { id: 35, corte: "Barriga", preco: 4918, categoria: "Suínos" },
    { id: 36, corte: "Bifana/Febras", preco: 4679, categoria: "Suínos" },
    { id: 37, corte: "Bochecha", preco: 4427, categoria: "Suínos" },
    { id: 38, corte: "Cachaço", preco: 4978, categoria: "Suínos" },
    { id: 39, corte: "Cabeça", preco: 2018, categoria: "Suínos" },
    { id: 40, corte: "Carne Picada", preco: 4401, categoria: "Suínos" },
    { id: 41, corte: "Chispe", preco: 3575, categoria: "Suínos" },
    { id: 42, corte: "Costela de Lombo", preco: 4428, categoria: "Suínos" },
    { id: 43, corte: "Costeleta de Cachaço", preco: 4428, categoria: "Suínos" },
    { id: 44, corte: "Entrecosto", preco: 6416, categoria: "Suínos" },
    { id: 45, corte: "Entremeada", preco: 5618, categoria: "Suínos" },
    { id: 46, corte: "Espetada", preco: 6634, categoria: "Suínos" },
    { id: 47, corte: "Gordura", preco: 893, categoria: "Suínos" },
    { id: 48, corte: "Guisado(Rojões)", preco: 4278, categoria: "Suínos" },
    { id: 49, corte: "Hambúrguer", preco: 4981, categoria: "Suínos" },
    { id: 50, corte: "Kit Feijoada", preco: 2953, categoria: "Suínos" },
    { id: 51, corte: "Lombinho", preco: 6031, categoria: "Suínos" },
    { id: 52, corte: "Lombo para Assar", preco: 6018, categoria: "Suínos" },
    { id: 53, corte: "Orelhas", preco: 4008, categoria: "Suínos" },
    { id: 54, corte: "Pá", preco: 4426, categoria: "Suínos" },
    { id: 55, corte: "Pernil", preco: 4427, categoria: "Suínos" },
    { id: 56, corte: "Piano", preco: 7518, categoria: "Suínos" },
    { id: 57, corte: "Ponta do Entrecosto", preco: 4214, categoria: "Suínos" },
    { id: 58, corte: "Rabo", preco: 3095, categoria: "Suínos" },
    { id: 59, corte: "Secretos", preco: 6008, categoria: "Suínos" },
    { id: 60, corte: "T-Bone", preco: 4653, categoria: "Suínos" },
    { id: 61, corte: "Tomahawk", preco: 7006, categoria: "Suínos" },
    { id: 62, corte: "Leitão Inteiro", preco: 33000, categoria: "Suínos" },
    { id: 63, corte: "Meio Leitão", preco: 19000, categoria: "Suínos" },
    { id: 64, corte: "Meio Leitão", preco: 19000, categoria: "Suínos" },
    { id: 65, corte: "Bife de Frango", preco: 7859, categoria: "Aves" },
    {
      id: 66,
      corte: "Bife de Peito de Frango Panado",
      preco: 8958,
      categoria: "Aves",
    },
    {
      id: 67,
      corte: "Bife de Peito de Frango Recheado",
      preco: 8692,
      categoria: "Aves",
    },
    { id: 68, corte: "Coxa de Frango", preco: 2905, categoria: "Aves" },
    {
      id: 69,
      corte: "Espetada de Peito de Frango",
      preco: 8983,
      categoria: "Aves",
    },
    { id: 70, corte: "Frango para Churrasco", preco: 5200, categoria: "Aves" },
    { id: 71, corte: "Galinha para Cabidela", preco: 4641, categoria: "Aves" },
    { id: 72, corte: "Nugget de Frango", preco: 3410, categoria: "Aves" },
    { id: 73, corte: "Cabrito Inteiro", preco: 33000, categoria: "Caprinos" },
    {
      id: 74,
      corte: "Meio cabrito Inteiro",
      preco: 19000,
      categoria: "Caprinos",
    },
    { id: 75, corte: "Caixa Churrasco", preco: 77249, categoria: "Caixas" },
    { id: 76, corte: "Caixa Gulungo", preco: 97798, categoria: "Caixas" },
    { id: 77, corte: "Caixa Kwanza", preco: 70408, categoria: "Caixas" },
    { id: 78, corte: "Caixa Kalandula", preco: 54108, categoria: "Caixas" },
    { id: 79, corte: "Caixa Serra da Leba", preco: 42898, categoria: "Caixas" },
    { id: 80, corte: "Caixa Kandengue", preco: 42064, categoria: "Caixas" },
  ]);
  Alpine.store("categorias", [
    { id: 0, active: false, categoria: "Bovinos" },
    { id: 1, active: false, categoria: "Suínos" },
    { id: 2, active: false, categoria: "Aves" },
    { id: 3, active: false, categoria: "Caprinos" },
    { id: 4, active: false, categoria: "Caixas" },
  ]);
  Alpine.store("title", "hello kitty");
});

function CheckCart() {
  var existingCart = localStorage.getItem("cart");
  if (existingCart) {
    Alpine.store("cart", JSON.parse(existingCart));
    const total = getTotal(JSON.parse(existingCart));
    Alpine.store("total", total);
    return JSON.parse(existingCart);
  } else {
    Alpine.store("cart", []);
    Alpine.store("total", 0);
    return [];
  }
}

function AddCart(item) {

  item.qty = 1;

  var cart = CheckCart();
  cart.push(item);
  Alpine.store("cart", cart);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCart(cart) {
  Alpine.store("cart", cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  const total = getTotal(cart);
  Alpine.store("total", total);
}

function getTotal(cart) {
  return cart.reduce((acc, item) => acc + item.preco * item.qty, 0);
}
