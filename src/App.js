import { useState } from "react";
import Drum from "./components/Drum";

function App() {
	const [sounds, setSounds] = useState([
		{
			name: "boom",
			sound: require("./sounds/boom.wav").default,
			key: "A",
		},
		{
			name: "clap",
			sound: require("./sounds/clap.wav").default,
			key: "S",
		},
		{
			name: "hihat",
			sound: require("./sounds/hihat.wav").default,
			key: "D",
		},
		{
			name: "kick",
			sound: require("./sounds/kick.wav").default,
			key: "F",
		},
		{
			name: "openhat",
			sound: require("./sounds/openhat.wav").default,
			key: "G",
		},
		{
			name: "ride",
			sound: require("./sounds/ride.wav").default,
			key: "H",
		},
		{
			name: "snare",
			sound: require("./sounds/snare.wav").default,
			key: "J",
		},
		{
			name: "tink",
			sound: require("./sounds/tink.wav").default,
			key: "K",
		},
		{
			name: "tom",
			sound: require("./sounds/tom.wav").default,
			key: "L",
		},
	]);

	return (
		<div className="App">
			<h1>React Drumkit</h1>
			<div className="drums">
				{sounds.map((sound, i) => (
					<Drum key={i} letter={sound.key} sound={sound.sound} />
				))}
			</div>
		</div>
	);
}

export default App;
