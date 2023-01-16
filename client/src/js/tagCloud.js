import TagCloud from 'TagCloud';

const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'React', 'SCSS', 'Bootstrap',
    'NodeJS', 'Git', 'Parcel',
    'SQL', 'MongoDB', 'ExpressJS',
    'Figma', 'JSON API', 'JWT Auth',
    // 'Nginx', 'HTTPs', 'Python',
];
let windoWidth = window.innerWidth > 1200 ? 250 : 200

  var tagCloud = TagCloud('#animation', myTags,{

    // radius in px
    radius: windoWidth,
  
    // animation speed
    // slow, normal, fast
    maxSpeed: 'slow',
    initSpeed: 'slow',
  
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    
    // interact with cursor move on mouse out
    keep: true
    
  });
  //To change the color of text randomly
  var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  // document.querySelector('.content').style.color = random_color;



