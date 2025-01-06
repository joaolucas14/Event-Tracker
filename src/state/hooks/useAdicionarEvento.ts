import { useRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";

const useAdicionaEvento = () => {
  const [listaEventos, setListaEventos] =
    useRecoilState<IEvento[]>(listaDeEventosState);
  return (evento: IEvento) => {
    const hoje = new Date();
    if (evento.inicio < hoje) {
      throw new Error("Não é possível adicionar eventos no passado");
    }
    evento.id = obterId();
    return setListaEventos((listaAntiga) => [...listaAntiga, evento]);
  };
};

export default useAdicionaEvento;
