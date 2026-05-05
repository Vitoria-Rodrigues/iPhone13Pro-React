import './Button.css';

const Button = ({label, Selecionado, id, color}) => {
  return (
    <div>
        <button className='btns'onClick={() => Selecionado(id)} style={{backgroundColor: color}}>{label}</button>
    </div>
  )
}

export default Button