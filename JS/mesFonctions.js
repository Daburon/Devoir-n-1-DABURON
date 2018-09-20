function AfficherLesCategories() {
    $.ajax({
        type: "get",
        url: "PHP/getLesCategories.php",
        success: function(data) {
            // On vide la DIV
            $('#divCategories').empty();
            $('#divCategories').append(data);
        },
        error: function() {
            alert("Erreur sur les Catégories");
        }
    });
}

function AfficherLesServices() {
    $.ajax({
        type: "get",
        url: "PHP/getLesServices.php",
        data: "id=" + $('#lstCateg').val(),
        success: function(data) {
            $('#divServices').empty();
            $('#divServices').append(data);
        },
        error: function() {
            alert("Erreur sur les Services");
        }
    });
}

function AfficherLesDeals() {
    $.ajax({
        type: "get",
        url: "PHP/getLesDeals.php",
        success: function(data) {
            $('#divDeals').empty();
            $('#divDeals').append(data);
        },
        error: function() {
            alert("Erreur sur les Deals");
        }
    });
}