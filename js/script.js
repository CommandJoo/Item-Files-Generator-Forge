document.getElementById('generate').addEventListener('click', event => {
    if((document.getElementById('modid').value == "" 
    || document.getElementById('modid').value == null)
    ||
    (document.getElementById('id').value == "" 
    || document.getElementById('id').value == null)
    ||
    (document.getElementById('name').value == "" 
    || document.getElementById('name').value == null)
    ) {
        document.getElementById('error').innerText = "Please fill all Textfields first!";
    }else{
        document.getElementById('error').innerText = null;

        let modid = document.getElementById('modid').value;
        let id = document.getElementById('id').value;
        let name = document.getElementById('name').value;

        let langfilestring = 'src/main/resources/assets/'+modid+'/lang/en_us.json:\n\n\"item.'+modid+'.'+id+'\": \"'+name+'\"';
        let modelfilestring = 'src/main/resources/assets/'+modid+'/models/item/'+id+'.json:\n\n\{ \n \"parent\": \"item/generated\"\, \n \"textures\": \{\n\"layer0\": \"'+modid+':items/'+id+'\" \n\}\n\}      ';

        let texturepath = 'src/main/resources/assets/'+modid+'/textures/items/'+id+'.png';

        let registryobject = 'public static final RegistryObject<Item> '+name.replace(' ', '_').toUpperCase()+' = YOUR_DEFERRED_REGISTER.register(\"'+id+'\", () -> new Item(new Properties().group(ItemGroup.YOUR_ITEMGROUP)));';

        document.getElementById('langoutput').innerText = langfilestring;
        document.getElementById('modelsoutput').innerText = modelfilestring;
        document.getElementById('texturepathoutput').innerText = texturepath;
        document.getElementById('registryobjectoutput').innerText = registryobject;
    }
});

addLink('github', 'https://github.com/CommandJoo/Item-Files-Generator-Forge');
addEffect('github');

function addLink(id, link) {
    document.getElementById(id).addEventListener('mousedown', event => {
        window.open(link);
    });
}

function addEffect(id) {
    document.getElementById(id).addEventListener('mouseover', event => {
        document.getElementById(id).src = '../images/'+id+'-hover.svg';
    });
    document.getElementById(id).addEventListener('mouseout', event => {
        document.getElementById(id).src = '../images/'+id+'-unhover.svg';
    });
}