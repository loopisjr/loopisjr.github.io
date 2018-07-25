//  _ _ _ _   _      _
//    | |    | |\  /| |
//    | |    | | \/ | |
//  __|_|    |_|    |_|
// 
//  Versão 0.2
// 
//  Plugin para apresentação de projetos organizados em seções.
//  Novos projetos devem ser adicionados no formato JSON no arquivo projects.js seguindo a estrutura de exemplo.

var matrix = {};

function myProjects(arr) {

    function Project(name, link, description, logo){
        this.name = name;
        this.link = link;
        this.logo = logo;
        this.description = description;
    }

    function addToSection(obj, property, value){
        if(obj[property] == undefined)
            obj[property] = [];
        obj[property].push(value);
    }    
    
    var i;
    var sections = [];
    sections.push("todos");

    for(i = 0; i<arr.length; i++) {

        var contain = false;
        for (var j = sections.length - 1; j >= 0; j--) {
            if(sections[j] in arr[i].section){
                contain = true;
                break;
            };          
        };

        for (var j = 0; j < arr[i].section.length; j++) {                   
                    addToSection(matrix, arr[i].section[j], new Project(arr[i].name, arr[i].link, arr[i].description, arr[i].logo));
        };      
        addToSection(matrix, sections[0], new Project(arr[i].name, arr[i].link, arr[i].description, arr[i].logo));      

        if (!contain) {
            sections.push(arr[i].section);          
        };
        
    }
    
    var menu = document.getElementById("sections");    
    var contentMenu = "<ul>";    

    var list = [];

    for(section in matrix){        
        list.push(section);        
    }

    list.sort();
    for (var i = 0; i < list.length; i++) {        
        var callFunction = "updateContent(\""+list[i]+"\")";        
        contentMenu += "<li onclick="+callFunction+" href=\"#"+list[i]+"\" ><a class='item-nav'>"+list[i]+"</a></li>";        
    };

    contentMenu += "</ul>";
    menu.innerHTML +=contentMenu;        
    updateContent("todos");
}

function updateContent(section){                
    var content = document.getElementById("projects");
    content.innerHTML = "";
    var text = "<div class='row'>";
    for(project in matrix[section]){                                
        //Alterar aqui a estrutura do conteudo.        
        text+='<div class="col s12 m4"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+matrix[section][project].logo+'" alt="'+matrix[section][project].name+'"></div><div class="card-content activator tooltipped" data-position="top" data-delay="500" data-tooltip="Clique para ver mais!"><span class="card-title activator grey-text text-darken-4">'+matrix[section][project].name+'</span><p>';
        if(matrix[section][project].link != null && matrix[section][project].link != ''){
            text+='<a href="'+matrix[section][project].link+'">Página do Projeto</a>';    
        }else{
            text+='<br>';
        }        
        text+='</p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">'+matrix[section][project].name+'<i class="material-icons right">close</i></span><p>'+matrix[section][project].description+'</p>';
        if(matrix[section][project].link != null && matrix[section][project].link != ''){
            text+='<p><a href="'+matrix[section][project].link+'">Página do Projeto</a></p>';    
        }        
        text+='</div></div></div>';
    }
    text += "</div>";
    content.innerHTML += text;
}

$(document).ready(function(){                       
            $("a.item-nav").click(function(){
                $("#projects").hide();                                             
                $("#projects").fadeIn();                                                
            });
            $('.tooltipped').tooltip({delay: 500});
            $('.tooltipped').click(function () {
                $('.material-tooltip').fadeOut(200);                
            });            
            $("li").click(function () {
                $("li").removeClass('selected');
                $(this).addClass('selected');
            })            
});
