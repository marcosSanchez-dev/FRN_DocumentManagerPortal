const soloAlfabetico = $event => {
    if (!(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g.test($event.key) || $event.keyCode == 32 || $event.keyCode == 209 || $event.keyCode == 241))
        $event.preventDefault();
};
export default soloAlfabetico;