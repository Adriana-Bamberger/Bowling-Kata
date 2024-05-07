// Score 64 (simple game):
// const frames = [
//   [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
// ]
// Score 71 (with 2 spares):
// const frames = [
//   [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
// ]
// Score 104 (with spares and strikes):
const frames = [
  [6, 4],
  [8, 0],
  [10, 0],
  [2, 7],
  [5, 5],
  [4, 0],
  [10, 0],
  [2, 1],
  [2, 6],
  [4, 4],
]

// function simpleAdd(frames) {
//   let sum = 0
//   for (let i = 0; i < frames.length; i++) {
//     sum += frames[i][0] + frames[i][1]
//   }
//   console.log(sum);
// }

// simpleAdd(frames)

// Take the numbers in the arrays within the array
// Adding the numbers together to get a final score

// //add together like last time,
// //add the first of the next array.
//   // if score of frame 0 and 1 = 10

//   //add
//   function sparesAdd(frames) {
//     let sum = 0
//     for (let i = 0; i < frames.length; i++) {
//       sum += frames[i][0] + frames[i][1]
//     if (frames[i][0] + frames[i][1] === 10) {
//       let spare = frames[i+1][0]
//     // console.log (spare)
//       sum = sum + spare
//     }
//     }
//     console.log(sum);

//   }

//   sparesAdd(frames)

//YAY DONE!!!!

// WE DID IT

// Score 119 (with spares, strikes and a double strike):
// const frames = [
//   [1, 2],
//   [6, 4],
//   [5, 4],
//   [10, 0],
//   [7, 2],
//   [10, 0],
//   [10, 0],
//   [5, 2],
//   [7, 0],
//   [4, 4],
// ]
//

// Score 141 (includes a strike on the last frame):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
// Score 300 (perfect game):
// const frames = [
//   [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
// ]
function sparesAndStrikes(frames) {
  let sum = 0
  for (let i = 0; i < frames.length; i++) {
    let frameScore = frames[i][0] + frames[i][1]
    // sum += frames[i][0] + frames[i][1]
    if (frames[i][0] === 10) {
      let strike = frames[i + 1][0] + frames[i + 1][1]
      let spare = frames[i + 1][0]
      frameScore = frameScore + spare + strike
    } else if (frames[i][0] + frames[i][1] === 10) {
      let spare = frames[i + 1][0]
      frameScore = frameScore + spare
      console.log()
    }
    sum += frameScore
    console.log(
      `Current frame: ${i} Frame score: ${frameScore} Running total: ${sum}`,
    )
  }
  console.log(sum)
}

sparesAndStrikes(frames)

// we have a math error, its broken somewhere in the middle but it fixes itself.
//when we're running score 104. it still spits out 104,
//but it's not going to help going forawrd as we're just lucky that frame 7 spits out 3, as that was the diffrance needed to get 104.
