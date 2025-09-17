const title = "Bonjour les gens !";
const showTitle = false;
const toDos = ["Présenter React", "Présenter JSX", "Créer des composants"];
function App() {
	const handleClick = (event) => {
		alert("Vous avez cliqué !");
	};

	return (
		<>
			{showTitle ? (
				<h1 id="title" className="title">
					{title}
				</h1>
			) : (
				<h1 id="title" className="title">
					Titre par défaut
				</h1>
			)}
			<input type="text" />
			<p onClick={handleClick}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Placeat atque ut pariatur quidem fugiat at dolores soluta.
				Officiis ratione vero odit voluptas repudiandae praesentium
				quibusdam quia, inventore natus mollitia. Nobis. Quos eveniet,
				iusto harum officiis facilis adipisci repudiandae fugiat
				reiciendis explicabo incidunt aspernatur et laborum nemo. Vel
				aliquid pariatur dicta exercitationem. Incidunt quidem,
				quibusdam repudiandae soluta doloremque illo possimus ex!
			</p>
      <ul>
        {toDos.map((toDo) => (<li key={toDo}>{toDo}</li>))}
      </ul>
		</>
	);
}

export default App;
