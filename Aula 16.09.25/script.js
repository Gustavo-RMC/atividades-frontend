    const inputTexto = document.getElementById("senha");
    
    const button = document.getElementById("btn");

    button.onclick = () => {
        alert(`A senha é: ${inputTexto.value}`);
    }; 