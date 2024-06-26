document.getElementById("resetPwdBtn").addEventListener("click", function () {
    if (document.getElementById("floatingPassword").value == "" && document.getElementById("floatingCnfPassword").value == "") {
        alert("Kindly fill the data");
        location.reload();
    } else {
        if (document.getElementById("floatingPassword").value == document.getElementById("floatingCnfPassword").value) {
            alert("Password reset success fully");
            location.reload();
        } else {
            alert("Both password should match");
            location.reload();
        }
    }
});