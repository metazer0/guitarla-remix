import imagen from '../../public/img/nosotros.jpg'
function Nosotros() {
  return (
    <main className="contenedores nosotros">
      <h2 className="heading">Nosotros</h2>
        <div className="contenido">
          <img src={imagen} alt="imagen sobre nosotros"/>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, corporis cupiditate delectus, distinctio dolore doloribus eos ex labore laboriosam minima nemo nulla odio, officia placeat quis quod ratione sit voluptatem?</p>
          </div>
        </div>
    </main>
  )
}

export default Nosotros