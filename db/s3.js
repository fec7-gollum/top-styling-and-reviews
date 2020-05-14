const images = [
  'https://assets.bonappetit.com/photos/5e90b61c90dc660008ef3192/3:2/w_5120,c_limit/BBaking_WEEK10_Buns_Beauty_16x9.jpg',
  'https://myfecphotos.s3.amazonaws.com/1004-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/101-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/1011-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/1021-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/1054-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/1072-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/1078-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/111-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/114-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/118-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/140-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/194-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/20-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/200-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/22-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/222-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/230-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/236-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/255-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/263-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/267-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/280-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/289-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/29-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/295-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/301-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/316-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/324-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/328-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/343-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/370-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/377-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/384-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/388-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/41-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/425-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/454-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/465-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/467-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/472-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/487-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/494-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/508-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/517-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/525-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/532-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/536-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/545-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/556-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/560-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/574-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/584-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/59-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/60-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/609-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/61-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/619-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/625-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/646-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/662-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/663-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/664-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/669-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/702-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/72-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/726-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/741-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/744-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/756-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/758-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/777-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/790-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/802-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/808-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/816-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/819-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/827-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/836-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/840-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/841-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/870-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/877-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/883-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/89-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/894-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/898-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/900-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/901-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/906-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/927-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/944-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/95-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/950-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/957-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/974-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/979-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/981-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/988-2000x800.jpg',
  'https://myfecphotos.s3.amazonaws.com/993-2000x800.jpg',
];

module.exports = images;
