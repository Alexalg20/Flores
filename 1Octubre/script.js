window.onload = () => {
    document.body.classList.remove("container");
    typeWriter(); // Llama a la función de escritura
};

const message = "Te amo mi amor eres el mejor saxofonista, el mejor esposo, el mejor novio, amigo sin duda eres mi todo te ama Alexa <3";
let index = 0;

function typeWriter() {
    if (index < message.length) {
        document.getElementById("loveMessage").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 200); // Ajusta el tiempo para la velocidad de escritura
    } else {
        index = 0;
        document.getElementById("loveMessage").innerHTML = "";
        setTimeout(typeWriter, 1000); // Reinicia después de un tiempo
    }
}
