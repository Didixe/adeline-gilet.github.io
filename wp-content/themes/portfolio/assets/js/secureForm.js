jQuery(function($) {
    var formID = '#wpforms-form-297';

    // Fonction de validation pour les champs Prénom et Nom
    function validateNameField(field) {
        var inputVal = field.val().trim();
        var regex = /^[a-zA-Z\s]+$/;

        var isValid = regex.test(inputVal) && inputVal !== "";
        console.log('Validating:', field.attr('name'), 'Value:', inputVal, 'Valid:', isValid);

        if (!isValid) {
            field.addClass('wpforms-error');
            return false;
        } else {
            field.removeClass('wpforms-error');
            return true;
        }
    }

    // Fonction de validation pour le champ Téléphone
    function validatePhoneField(field) {
        var inputVal = field.val().trim();
        var regex = /^[0-9]+$/;

        // Le champ est valide s'il est vide ou s'il contient uniquement des chiffres
        var isValid = inputVal === "" || regex.test(inputVal);
        console.log('Validating:', field.attr('name'), 'Value:', inputVal, 'Valid:', isValid);

        if (!isValid) {
            field.addClass('wpforms-error');
            return false;
        } else {
            field.removeClass('wpforms-error');
            return true;
        }
    }

    // Ajoutez la validation personnalisée pour le champ Prénom
    $('#wpforms-297-field_0').on('keyup blur', function() {
        validateNameField($(this));
    });

    // Ajoutez la validation personnalisée pour le champ Nom
    $('#wpforms-297-field_0-last').on('keyup blur', function() {
        validateNameField($(this));
    });

    // Ajoutez la validation personnalisée pour le champ Téléphone
    $('#wpforms-297-field_5').on('keyup blur', function() {
        validatePhoneField($(this));
    });

    // Soumettez le formulaire
    $(formID).on('submit', function(e) {
        var hasErrors = false;

        // Vérifiez le champ Prénom, Nom et Téléphone avant de soumettre
        $('#wpforms-297-field_0, #wpforms-297-field_0-last, #wpforms-297-field_5').each(function() {
            if ($(this).attr('id') === 'wpforms-297-field_5') {
                if (!validatePhoneField($(this))) {
                    hasErrors = true;
                }
            } else {
                if (!validateNameField($(this))) {
                    hasErrors = true;
                }
            }
        });

        // Empêchez la soumission si des erreurs sont détectées
        if (hasErrors) {
            e.preventDefault();
            alert('Veuillez remplir correctement tous les champs requis.');
        }
    });
});