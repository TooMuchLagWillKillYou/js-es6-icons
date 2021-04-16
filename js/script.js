function getIconsDb() {
  return [
    {
      name: "cat",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "crow",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dog",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dove",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dragon",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "horse",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "hippo",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "fish",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "carrot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "apple-alt",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "lemon",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "pepper-hot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "user-astronaut",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-graduate",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-ninja",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-secret",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
  ];
}

function getTypes(array){

  const types = [];

  array.forEach(elem => {

    if (!types.includes(elem['type'])){

      types.push(elem['type'])
    }
  });

  return types 
};

function colors(){

  return ['blue', 'orange', 'purple']
};

function displayIcon(array){

  const container = $('.icons');
  container.html('');

  array.forEach(elem => {
  
    container.append(
      `
      <div>
        <i class="${elem.family} ${elem.prefix}${elem.name}" style="color: ${elem['color']}"></i>
      </div>
      `
    )
  })
};

function colorIcon(array, types, colors){

  array.forEach(elem => {

    const iconType = elem['type'];
    const indexType = types.indexOf(iconType);
    const color = colors[indexType];
    elem['color'] = color;

  });

  return array
};

function addOption(array){

  for (var i = 0; i < array.length; i++){

    $('#type').append(`<option value="${array[i]}">${array[i]}</option>`);
  };
};

function filterArray(array, key){

  const filteredArray = array.filter(elem =>{

    if (elem['type'] == key){

      return elem
    };
  });

  return filteredArray
};

function init(){

  const iconsArray = getIconsDb();
  const iconTypes = getTypes(iconsArray);
  const colorsArray = colors();
  const coloredIcons = colorIcon(iconsArray, iconTypes, colorsArray);

  displayIcon(coloredIcons);
  addOption(iconTypes);

  $('#type').change(function(event){

    const currentType = $(this).val();

    if (iconTypes.includes(currentType)){

      const filteredIcons = filterArray(coloredIcons, currentType);
      displayIcon(filteredIcons);
      
    } else {
      displayIcon(coloredIcons);

    }

  });
};

$(init);
