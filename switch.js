var signo = prompt('¿Cual es tu signo?');

switch (signo) {
    case 'acuario':
        console.log('Intente ser más responsable con sus decisiones y no acuse a los demás de sus propios errores. Comience a trabajar para solucionarlos y no recaer en ellos.')
        break;
    case 'aries':
        console.log('Intente ser un poco más reservado en la vida. Disfrute de esta conducta y no se esfuerce en conformar siempre a su entorno, empiece a ser tal cual es.')
        break;
    case 'tauro':
        console.log('Será un buen momento para el inicio de sus proyectos. Tener la Luna en su signo, lo beneficiará en las decisiones que deba tomar durante esta jornada.')
        break;
    case 'geminis':
        console.log('Esté atento, ya que podrá recibir en este día diferentes críticas en torno a sus reacciones emocionales. Debería escucharlas y así podrá mejorar en las relaciones.')
        break;
    case 'cancer':
    case 'cáncer':
        console.log('Durante esta jornada, su vida social tomará otro rumbo ya que contará con la presencia de nuevos compromisos. Aproveche ya que su entusiasmo se potenciará.')
        break;
    case 'leo':
        console.log('Si tiene algo que cambiar, hágalo hoy. Este día le ofrece las mejores posibilidades para enfrentar las transformaciones y los cambios en su vida.')
        break;
    case 'virgo':
        console.log('En esta jornada, después de tanto logrará recuperar el tiempo perdido y podrá concretar todas las tareas que le quedaron pendientes en su vida profesional.')
        break;
    case 'libra':
        console.log('Mañana propicia para que confíe en su visión y así pueda tomar esa determinación que hace rato lo tiene preocupado. Relájese, todo saldrá de manera correcta.')
        break;
    case 'escorpio':
        console.log('Entienda que ya es hora para tomar esa determinación sin demorarse más tiempo. Sepa que no será conveniente que deje para mañana lo que desea hacer.')
        break;
    case 'sagitario':
        console.log('Sepa que la lucidez mental le permitirá encontrar las soluciones. Tendrá que moverse de un lado a otro para resolver esos temas difíciles e insólitos.')
        break;
    case 'piscis':
        console.log('Aunque quiera cumplir con todos sus compromisos, hoy todo parecerá derrumbarse. No es momento para que se desespere, ya que de a poco todo se acomodará.')
        break;
    case 'capricornio':
        console.log('Un cierto estado de indiferencia lo acompañará en el día. Evite cualquier esfuerzo y tómese el tiempo que crea necesario para cumplir con todas sus obligaciones.')
        break;

    default:
        console.log('No es un signo zodiacal valido')
        break;
}