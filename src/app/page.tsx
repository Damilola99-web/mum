'use client';
import Image from 'next/image';
import { useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function Home() {
	const [cardOpen, setCardOpen] = useState(false);
	const { width, height } = useWindowSize();

	return (
		<div className='relative flex flex-col items-center justify-center w-screen h-screen'>
			{cardOpen && (
				<Confetti
					width={width}
					height={height}
					numberOfPieces={500}
				/>
			)}
			<div className=' flex flex-row items-center justify-center w-full h-[50%] bg-pink-500'></div>
			<div className=' flex flex-row items-center justify-center w-full h-[50%] bg-blue-500'></div>
			<div className=' flex flex-col max-w-[1000px] md:flex-row absolute w-[80%] md:min-h-[400px] bg-blue-800 rounded-md'>
				<div
					onClick={() => {
						setCardOpen(true);
					}}
					className=' bg-white w-full md:w-[40%] rounded-md'
				>
					{cardOpen && (
						<Image
							src={'/mum.jpg'}
							alt=''
							width={5000}
							height={5000}
							className=' duration-500 w-full h-[350px]  object-cover rounded-t-md'
						/>
					)}
					{!cardOpen && (
						<Image
							src={'/02.jpg'}
							alt=''
							width={5000}
							height={5000}
							className=' animate-pulse w-full h-[350px]  object-cover rounded-t-md'
						/>
					)}
				</div>
				<div className=' p-5 md:p-8 text-white'>
					{!cardOpen && (
						<div className=' flex flex-col space-y-5'>
							<h1 className=' text-xl'>
								Today marks the birthday of our remarkable mother, a woman of great
								status, and a dedicated educator.
							</h1>
							<p className=' text-yellow-400'>
								*Click the blinking image to reveal todays celebrant.
							</p>
						</div>
					)}

					{cardOpen && (
						<div className='flex flex-col space-y-5'>
							<p className=' text-base'>
								Happy birthday to our Mother, Mrs.Morufat Olatayo Wahab. May this
								day be filled with laughter, cherished memories, and all things that
								will make your heart soar. We love you more than what words can
								express, thanks so much mom.
							</p>
							<p className='text-lg'>The Wahab&#39;s Family</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
