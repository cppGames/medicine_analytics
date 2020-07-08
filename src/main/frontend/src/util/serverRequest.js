export function clean(obj) {
  // Remove blank attributes from an Object
  for (var propName in obj) { 
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
      delete obj[propName];
    }
  }
}




const handleClick = (event) => {
  // const timer = React.useRef()
  console.log(filters)
  setLoading(true)
  timer.current = setTimeout(() => {
    setLoading(false)
    props.setFilters(filters)
  }, 1500)
}
