(function ($) {
//parametrem funkcji jest obiekt wyrażenia regularnego (reg):
    $.fn.sprawdzPole = function (reg){
        if (!reg.test(this.val()))
            return (false);
        else
            return (true);
    };
})(jQuery);

$(function () {
    $('#wyslij').click(function(){
    obiektNazw = /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{2, 20} $ /;
        ok = true;
        if (!$("#nazw").sprawdzPole(obiektNazw)) {
            $("#nazw_error").text("Wprowadź poprawnie nazwisko!");
            ok = false;
        } 
        else {
            $("#nazw_error").text("");
        }

        if (ok) {
            $("#form1").submit();
            return true;
        }
        else return false;
        });
    });