

function newImage(source,left,bottom){
    let name = document.createElement('img')
name.src = source
name.style.position = 'fixed'
name.style.left = left
name.style.bottom = bottom
document.body.append(name)
return name
}


newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px',' 100px')
newImage('assets/crate.png', '150px','200px')
newImage('assets/well.png' ,' 500px',' 425px')



function newItem(source, left, bottom){
 let item = newImage(source, left,bottom)

 
 //item.src = 'assets/sword.png';
 //item.style.position = 'fixed';
 //item.style.left = '500px';
 //item.style.bottom = '405px';
 //document.body.append(item);
    





item.addEventListener('click', function(){
    item.remove()
});

}

newItem('assets/shield.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');
newItem('assets/sword.png', '500px',  '405px');
newItem('assets/grass.png ','100px','100px')
newItem('assets/sky.png', '0%','0%','100%','100p%')