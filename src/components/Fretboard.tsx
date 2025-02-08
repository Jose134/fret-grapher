import './Fretboard.css';

interface FretboardProps {
  stringCount: number;
  fretCount: number;
}

const Fretboard = (props: FretboardProps) => {
  const strings = Array.from({ length: props.stringCount }, (_, i) => i + 1);
  const frets = Array.from({ length: props.fretCount }, (_, i) => i + 1);

  const fretboardMarkers = [1, 3, 5, 7, 9, 12, 15, 17, 19, 21, 24];

  return (
    <div className='fretboard-container'>
      {
        frets.map((fret) => {
          const scaleLength = 25.5; // typical scale length of an electric guitar in inches
          const fretPosition = (fret: number) => scaleLength / Math.pow(2, (fret - 1) / 12);
          const style = {
            flexBasis: `${fretPosition(fret) / scaleLength * 100}%`
          };
          const className = 'fret-container ' + (fretboardMarkers.includes(fret) ? 'fret-marker' : '');
          return (
            <div key={fret} style={style} className={className}>
              {
                strings.map((string) => (
                  <div key={string} className="tile"></div>
                ))
              }
            </div>
          );
        })
      }
    </div>
  );
}

export default Fretboard;