import '/src/styles/Input.css';

export const Input = ({ texto, valor, setter }) => {
    return (
        <div className='inputCustom'>
            <input id={texto + 'InputCustom'} type='text' value={valor} onChange={(e) => setter(e.target.value)} placeholder={texto} />
            <label htmlFor={texto + 'InputCustom'}>{texto}</label>
            {valor && <p onClick={() => setter("")}>×</p>}
        </div>
    )
}