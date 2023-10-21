export default function Card(props) {
  function derivedClass() {
    let baseClass = 'background-alt rounded-md shadow-md';

    if (!props.className) {
      return baseClass;
    } else {
      return `${baseClass} ${props.className}`;
    };
  };

  return (
    <div className={ derivedClass() }>
      { props.children }
    </div>
  )
}
