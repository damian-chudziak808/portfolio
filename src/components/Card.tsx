import { useState, useEffect } from "react"
import "./card.css"
import bunny from "../assets/bunny.png"
import { getRandomInt } from "../utils/utils"

type Props = {}

function Card({}: Props) {
  const [carrots, setCarrots] = useState(() => {
    const saved = localStorage.getItem("carrots")
    const initialValue = JSON.parse(saved!)
    return initialValue || 0
  })
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    localStorage.setItem("carrots", carrots.toString())
  }, [carrots])

  const handleClick = () => {
    setCarrots(carrots + 1)
    setRotation(getRandomInt(0, 360))
  }

  const handleReset = () => {
    setCarrots(0)
    setRotation(0)
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src={bunny} alt="bunny pixelart" />
      </div>
      <div className="card-body">
        <h2 className="card-title">Hi, Traveller!</h2>
        <p className="card-text">Unfortunately, there's nothing here... yet.</p>
        <div className="card-carrots">
          <div
            style={{ transform: `rotate(${rotation}deg)` }}
            className="card-carrots-emoji"
          >
            🥕
          </div>
          <div className="card-carrots-title">
            <h2>Carrot</h2>
            <p>x{carrots}</p>
          </div>
          <button
            className="card-carrots-reset"
            onClick={() => {
              handleReset()
            }}
          >
            reset
          </button>
        </div>
        <button
          className="card-addCarrot"
          onClick={() => {
            handleClick()
          }}
        >
          Add carrot
        </button>
      </div>
    </div>
  )
}

export default Card
