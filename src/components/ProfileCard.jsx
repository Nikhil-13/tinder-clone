import '../App.css'

function ProfileCard() {
	return (
		<>
			<div className='card'>
				<div className='card-body'>
					<img src='https://source.unsplash.com/random' alt='profile picture' />
					<div className='card-title' id='name'>
						<h2>Ashley</h2>
					</div>
					<div className='card-text' id='bio'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, soluta!
					</div>
				</div>
				<div className='card-buttons'>
					<button className='left' id='left'>
						left
					</button>
					<button className='right' id='right'>
						right
					</button>
				</div>
			</div>
		</>
	)
}

export default ProfileCard
