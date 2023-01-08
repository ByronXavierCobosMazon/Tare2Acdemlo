import { useState } from 'react'
import './App.css'
import Cards from './assets/components/Cards'
import Error from './assets/components/Error'
import FormSerch from './assets/components/FormSerch'
import setGetDataApi from './assets/hooks/setGetDataApi'

function App() {

  const [dataSerch, setDaraSerch] = useState('')
  const formComponents =
    <FormSerch
      setHook={setDaraSerch}
      textInput={'Search drinks'}
      textButton={'Search'}
      dataId={'idList'}
    />

  const { data, isTry } = setGetDataApi('https://www.thecocktaildb.com/api/json/v1/1/search.php', dataSerch)

  const componentsCard = data.map((objectCard, index) =>
    <Cards
      data={objectCard}
      key={index}
    />
  )

  const componentsError =<Error  
  imgError={'/bar.jpg'}
  textError={'Lo siento! No hay coincidencias'}
  />


  return (
    <div className="App">
      {formComponents}

      <div className='App__div'>
        {
          isTry === true
            ?
            componentsCard
            :
            componentsError
        }
      </div>

    </div>
  )
}

export default App
