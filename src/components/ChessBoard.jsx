import { Chessboard } from 'react-chessboard';

export function ChessBoard() {
  const chessboardOptions = {
    // your config options here
  };

  return <div className='w-[900px] h-70 mx-auto flex justify-between'>
    <div className='text-white font-medium text-3xl'>
        For all my chess lovers.
    </div> 
    <div className='w-70 h-70'>
        <Chessboard options={chessboardOptions}/>;
    </div>   
  </div> 
}