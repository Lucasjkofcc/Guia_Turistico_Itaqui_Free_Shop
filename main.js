function Espanhol(){
    const paragrafos = document.querySelectorAll(".texto-idioma")
    paragrafos[0].innerHTML = "Inaugurado el <strong>18 de junio de 2025</strong>, el <strong>Brasil Free Shop</strong> —un proyecto del <strong>Grupo Baklizi</strong>— marca un paso importante para el desarrollo económico y turístico del municipio. El establecimiento opera en la ciudad con cerca de 80 empleados contratados, consolidándose como una importante fuente de empleo y potenciando el comercio local. Acepta <strong>reales, pesos y dólares</strong>. Ofrece diversas opciones a precios bajos, incluyendo bebidas, chocolates, artículos electrónicos y ropa."
    paragrafos[1].innerHTML = "<strong>Horario de atención:</strong> de lunes a domingo, de 9:00 a 20:00 horas.<br><strong>Documento necesario:</strong> documento oficial con fotografía.<br><strong>Límite mensual por persona:</strong> hasta 500 USD libres de impuestos y un máximo de 12 litros de bebidas alcoólicas en total."
    paragrafos[2].textContent = "Ubicadas en ciudades brasileñas hermanadas con municipios extranjeros, los free shops (tiendas libres de impuestos) en fronteras terrestres están autorizadas por una normativa de 2018. Esta regulación garantiza la exención de algunos impuestos aplicados en el precio de los productos. En la práctica, para los brasileños esto significa poder comprar productos de marcas extranjeras sin pagar aranceles de importación."
}

function English(){
    const paragrafos = document.querySelectorAll(".texto-idioma")
    paragrafos[0].innerHTML = ""
    paragrafos[1].innerHTML = ""
    paragrafos[2].textContent = ""
}

function Portuguese(){
    const paragrafos = document.querySelectorAll(".texto-idioma")
    paragrafos[0].innerHTML = "Inaugurado em <strong>18/06/2025</strong>, o <strong>Brasil Free Shop</strong>, empreendimento do <strong>Grupo Baklizi</strong>, marca um passo importante para o desenvolvimento econômico e turístico do município. O empreendimento atua na cidade com cerca de 80 funcionários contratados, consolidando-se como um importante gerador de empregos e fortalecendo o comércio. Aceita <strong>reais, pesos e dólares</strong>. Várias opções a preço baixo, incluindo bebidas, chocolates, eletrônicos e vestuário."
    paragrafos[1].innerHTML = "<strong>Horário de funcionamento:</strong> de domingo a domingo, das 9h às 20h.<br><strong>Documento necessário:</strong> documento oficial com foto.<br><strong>Limites mensais por pessoa:</strong> até US$500,00 isento de impostos e máximo de 12 litros de bebidas alcoólicas no total."
    paragrafos[2].textContent = "Instalados em cidades brasileiras gêmeas a municípios estrangeiros, os free shops de fronteira terrestre são permitidos por lei regulamentada em 2018. O regramento garante a isenção de alguns impostos embutidos nas mercadorias. Na prática, para os brasileiros significa comprar produtos de marcas estrangeiras sem as taxas de importação."
}
