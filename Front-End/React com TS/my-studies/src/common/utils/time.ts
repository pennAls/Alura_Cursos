export const timeToSeconds = (tempo: string) => {
  const [horas, min, sec] = tempo.split(':');
  const horasEmSec = Number(horas) * 3600;
  const minEmSec = Number(min) * 60;
  return horasEmSec + minEmSec + Number(sec);
};
