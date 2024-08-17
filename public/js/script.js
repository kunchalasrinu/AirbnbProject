(() => {
    "use strict";

    //fetch all the forms we want to apply custom bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    //loop over them and prevent submission
    Array.from(forms).forEach((form) => {
        from.addEventListener("submit",(event) => {
            if(!form.checkValidity()){
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add("was-validated");
        },
        false
    );
 });
})();
