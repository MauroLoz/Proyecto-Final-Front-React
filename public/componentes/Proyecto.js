class Proyecto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrar: true
        };

        this.cambiarMostrar = this.cambiarMostrar.bind(this);
    }

    cambiarMostrar(){
        var mostrarActual = this.state.mostrar;

        this.setState({
            mostrar: !mostrarActual
        });        
    }

    render() {
        var clase = ""
        var texto = " "
        if (this.state.mostrar) {
            clase = " d-block";
            texto = "Mostrar Menos"
        } else {
            clase = " d-none"
            texto = "Mostrar Mas"
        }
        return(
            <React.Fragment>
                <img src={"img/" + this.props.imagen} alt="LogoWapp" width="150" class="mr-3 d-none d-sm-block"/>
                    <div>
                        <h4>{this.props.titulo}</h4>
                        <button class="btn btn-primary" onClick={this.cambiarMostrar}>{texto}</button>
                        <p class={clase}>{this.props.descripcion}</p>
                        <a href={this.props.link} target="_blank" class={"btn btn-" + this.props.boton + clase}> Ir al proyecto </a>     
                    </div>         
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <Proyecto titulo="Sauce" descripcion="Descripcion de warap" imagen="WhatsApp-logo-12.webp" link="https://sauce.uy" boton="success"/>, 
    document.getElementById("proyecto-wapp")
    );

ReactDOM.render(
    <Proyecto titulo="Nerd" descripcion="Lorem ipsum nomen" imagen="png-transparent-emoji-smiley-emoticon-nerd-computer-icons-nerd-face-smiley-sticker.png" link="https://nerd.uy" boton="primary"/>, 
    document.getElementById("proyecto-nerd")
    );

ReactDOM.render(
    <Proyecto titulo="Lumetrio" descripcion="Descripcion de Lumetrio" imagen="descarga.png" link="https://lumetrio.com" boton="danger"/>, 
    document.getElementById("proyecto-lumetrio")
    );