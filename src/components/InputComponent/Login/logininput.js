import styled from "styled-components"

const Input = styled.input`
    border: 1px solid rgb(230 232 234);
    border-radius: 4px;
    margin-bottom: 8px;
    cursor: pointer;
    &[type="submit"]{
        transition: all 0.3s ease-in-out;
        background-color: #38b4ff;
        border: none;
        color: white;
        &:hover{
            opacity: 0.8;
        }
    }
`

export default function LoginInput({type, width, height, fontSize, value, onChange, placeholder, onClick, padding, backgroundColor, color, marginBottom, minLength}){
    const option = {
        width: width,
        height: height,
        fontSize: fontSize,
        padding: padding,
        backgroundColor : backgroundColor,
        color: color,
        marginBottom : marginBottom,
        minLength : minLength,
    }
    return(
        <Input onChange={onChange} type={type} style={option} value={value} placeholder={placeholder} onClick={onClick} minLength={minLength}/>
    )
}