function fortran_block() {

    fortran_block.prototype.define = function fortran_block() {
        var model = scicos_model();
        model.sim = list(new ScilabString([" "]), new ScilabDouble([1001]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([0]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        this.funam = "forty";

        var label = list(new ScilabString([sci2exp(parseFloat(getData(model.in)))], [sci2exp(parseFloat(getData(model.out)))], [sci2exp(getData(model.rpar))], [this.funam]), list(new ScilabDouble()));

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"fortran_block\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, label, gr_i);
        this.displayParameter=[this.funam];
        return new BasicBlock(this.x);
    }
    fortran_block.prototype.details = function fortran_block() {
        return this.x;
    }

    fortran_block.prototype.get_popup_title = function fortran_block() {
        var set_param_popup_title="Set fortran_block parameters <br>";
        return set_param_popup_title
    }
    fortran_block.prototype.getDimensionForDisplay = function fortran_block(){
        var dimension = { width: 80, height: 40 };
        return dimension
    }
}
