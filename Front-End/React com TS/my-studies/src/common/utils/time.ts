export const timeToSeconds = (tempo: string) => {
  const [horas, min, sec] = tempo.split(":");
  const horasEmSec = Number(horas) * 3600;
  const minEmSec = Number(min) * 60;
  return horasEmSec + minEmSec + Number(sec);
};

export const secondsToTime = (segundos: number) => {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = segundos % 60;

  return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(
    2,
    "0"
  )}:${String(segundosRestantes).padStart(2, "0")}`;
};
