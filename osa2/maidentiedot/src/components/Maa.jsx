import {useEffect, useState} from 'react'
import saaService from '../services/saa'


const Maa = ({maa}) => {
    const languages = maa.languages ? Object.values(maa.languages) : []
    const capital = maa.capital?.[0] ?? null
    const [saa, setSaa] = useState(null)
    const [saaError, setSaaError] = useState(null)

    useEffect(() => {
        if (!capital) return
        setSaa(null)
        setSaaError(null)

        saaService
        .getCurrentByCapital(capital, maa.cca2)
        .then(data => setSaa(data))
        .catch(() => setSaaError('Weather data not available'))

    }, [capital, maa.cca2])

    const icon = saa?.weather?.[0]?.icon
    const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null

    return (
        <div>
            <h2>{maa.name.common}</h2>
            <div>capital {maa.capital?.[0] ??'—'}</div>
            <div>area {maa.area}</div>

            <h3>languages</h3>
            <ul>
                {languages.map(lang => <li key={lang}>{lang}</li>)}

            </ul>

            <img
            src={maa.flags?.png}
            alt={maa.flags?.alt ?? `flag of ${maa.name.common}`}
            width="160"/>

            <h3>Weather in {capital}</h3>

            {!capital ?(
                <div>No capital found</div>
            ) : saaError ? (
                <div>{saaError}</div>
            ) : !saa ? (
                <div>loading...</div>
            ) : (
        <div>
          <div>temperature {saa.main.temp} °C</div>
          {iconUrl && <img src={iconUrl} alt="weather icon" />}
          <div>wind {saa.wind.speed} m/s</div>
        </div>
            )}

        </div>
    )
}

export default Maa