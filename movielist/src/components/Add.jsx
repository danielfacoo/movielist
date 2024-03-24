import { useState } from "react"


const Add = () => {
    const[query, setQuery] = useState("");
    
    function onChange (e) {
        setQuery(e.target.value)

    }

  return (
    <div className="add-page">
        <div className="container">
            <div className="add-content">
                <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"></img>
            <div className="titles">
                <h1>Hoş Geldiniz.</h1>
                <h2>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</h2>
                {query}
                </div>
                <div className="input-wrapper">
            <input type="text" 
            onChange={onChange}
            placeholder="Film, dizi, kişi ara ..."/>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Add