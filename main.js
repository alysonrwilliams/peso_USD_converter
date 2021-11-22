const objectFromEntries = entries => [...entries]
  .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {})

const formToObject = form => objectFromEntries(new FormData(form).entries())

// rates & conversion equation

const rates = {
  USD: 20.69,
  MXN: 1,
}

const convert = (amount, from, to) => rates[from] / rates[to] * amount

// pulling from the DOM here

const output = document.getElementById('output')

document
  .getElementById('converter')
  .addEventListener('submit', event => {
    event.preventDefault()
 
    const { amount, from, to } = formToObject(event.target)
    const result = convert(amount, from, to)
    
    output.textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`
  })