<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ucHeader.ascx.cs" Inherits="QuestionBank.Online.OnlinePortal.UserControls.ucHeader" %>
<script src='<%= ResolveUrl("../CommonFiles/OnlinePortalJS/Menu/Menu.js")%>' type="text/javascript"></script>
<script type="text/javascript">
    $(function () {
        name = '<%= Session["UserName"] %>'
        UserName = '<%= Session["DisplayUserName"] %>'
        var Userid = '<%= Session["UserID"] %>'
        var Userstatus = '<%= Session["Status"] %>'
        $('#hdnStatus').text(Userstatus);
        $('#lblusername').text(name)
        $('#lblUserid').text(Userid)
        var MonthName = '<%=System.Configuration.ConfigurationManager.AppSettings["MonthName"]%>'
        var Year = '<%=System.Configuration.ConfigurationManager.AppSettings["Year"]%>'
        TermCondition = '<%=System.Configuration.ConfigurationManager.AppSettings["TCPathRetrive"]%>'
        $("#hdnmonthname").val(MonthName);
        $("#hdnyear").val(Year);
    });
</script>
<!-- Header Start Here -->
<div class="container">
    <div class="TopBand">
        <div class="TopLoginRow row">
            <div class="col-md-5 Mob_Hide">
                <div class="col-md-6">
                    <img src='<%=ResolveUrl ("../CommonFiles/img/email.png")%>' alt="" />
                    <a href="mailto:admin@sciencetests.co.uk">admin@sciencetests.co.uk</a></div>
                <div class="col-md-6">
                    <img src='<%=ResolveUrl ("../CommonFiles/img/call.png")%>' alt="" />
                    <strong>+44 7932976947</strong></div>
            </div>
            <div class="col-md-7">
                <div class="col-sm-7">
                    <form>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" id="tblbfrlogin" runat="server">
                        <tr>
                            <td>
                                <input id="txtUername" type="text" class="UserName form-control" value="" placeholder="Username"
                                    runat="server" />
                            </td>
                            <td style="padding-right: 5px !important;">
                                <input id="txtPassword" type="password" class="Password form-control" value="" placeholder="Password"
                                    runat="server" />
                            </td>
                            <td>
                                <asp:Button ID="btnLogins" runat="server" Text="login" class="btn-default" OnClick="btnLogins_Click" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <asp:Label ID="lbllogin" runat="server" Visible="false" Style="color: Red"></asp:Label>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" id="tblaftrlogin"
                        runat="server">
                        <tr>
                            <td class="text-right" style="font-size: 14px; color: #00adef">
                                <strong>
                                    <asp:Label ID="lblUsername" runat="server"></asp:Label></strong>
                            </td>
                            <td class="text-right">
                                <asp:Button ID="btnlogout" runat="server" Text="Logout" class="btn-default" OnClick="btnlogout_Click" />
                            </td>
                        </tr>
                    </table>
                    </form>
                </div>
                <input type="hidden" id="hdnmonthname" />
                <input type="hidden" id="hdnyear" />
                <div class="col-sm-5 black11px" id="DivNotMember" runat="server" style="display: none">
                    Not a member? <span class="blue11px"><a href="../Pages/frmMembership.aspx">Register
                        Now</a></span>&nbsp;&nbsp;
                    <img src="../Img/new.gif" /><span style="font-weight: bold;" class="blue11px"><a
                        href="../Pages/frmPromotionalSignIn.aspx">Promostional sign in</a></span>
                    <!--<span class="flag_container">
                        <select name="countries" id="countries" style="width: 60px;">
                            <option value='ad' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ad"
                                data-title="Andorra"></option>
                            <option value='ae' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ae"
                                data-title="United Arab Emirates"></option>
                            <option value='af' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag af"
                                data-title="Afghanistan"></option>
                            <option value='ag' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ag"
                                data-title="Antigua and Barbuda"></option>
                            <option value='ai' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ai"
                                data-title="Anguilla"></option>
                            <option value='al' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag al"
                                data-title="Albania"></option>
                            <option value='am' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag am"
                                data-title="Armenia"></option>
                            <option value='an' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag an"
                                data-title="Netherlands Antilles"></option>
                            <option value='ao' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ao"
                                data-title="Angola"></option>
                            <option value='aq' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag aq"
                                data-title="Antarctica"></option>
                            <option value='ar' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ar"
                                data-title="Argentina"></option>
                            <option value='as' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag as"
                                data-title="American Samoa"></option>
                            <option value='at' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag at"
                                data-title="Austria"></option>
                            <option value='au' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag au"
                                data-title="Australia"></option>
                            <option value='aw' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag aw"
                                data-title="Aruba"></option>
                            <option value='ax' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ax"
                                data-title="Aland Islands"></option>
                            <option value='az' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag az"
                                data-title="Azerbaijan"></option>
                            <option value='ba' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ba"
                                data-title="Bosnia and Herzegovina"></option>
                            <option value='bb' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag bb"
                                data-title="Barbados"></option>
                            <option value='bd' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag bd"
                                data-title="Bangladesh"></option>
                            <option value='be' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag be"
                                data-title="Belgium"></option>
                            <option value='bf' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag bf"
                                data-title="Burkina Faso"></option>
                            <option value='bg' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag bg"
                                data-title="Bulgaria"></option>
                            <option value='bh' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag bh"
                                data-title="Bahrain"></option>
                            <option value='bi' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag bi"
                                data-title="Burundi"></option>
                            <option value='bj' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag bj"
                                data-title="Benin"></option>
                            <option value='bm' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag bm"
                                data-title="Bermuda"></option>
                            <option value='bn' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag bn"
                                data-title="Brunei Darussalam"></option>
                            <option value='bo' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag bo"
                                data-title="Bolivia"></option>
                            <option value='br' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag br"
                                data-title="Brazil"></option>
                            <option value='bs' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag bs"
                                data-title="Bahamas"></option>
                            <option value='bt' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag bt"
                                data-title="Bhutan"></option>
                            <option value='bv' data-image="flagdropdown/icons/blank.gif" data-imagecss="flag bv"
                                data-title="Bouvet Island"></option>
                            <option value='bw' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag bw"
                                data-title="Botswana"></option>
                            <option value='by' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag by"
                                data-title="Belarus"></option>
                            <option value='bz' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag bz"
                                data-title="Belize"></option>
                            <option value='ca' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ca"
                                data-title="Canada"></option>
                            <option value='cc' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag cc"
                                data-title="Cocos (Keeling) Islands"></option>
                            <option value='cd' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag cd"
                                data-title="Democratic Republic of the Congo"></option>
                            <option value='cf' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag cf"
                                data-title="Central African Republic"></option>
                            <option value='cg' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag cg"
                                data-title="Congo"></option>
                            <option value='ch' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ch"
                                data-title="Switzerland"></option>
                            <option value='ci' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ci"
                                data-title="Cote D'Ivoire (Ivory Coast)"></option>
                            <option value='ck' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ck"
                                data-title="Cook Islands"></option>
                            <option value='cl' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag cl"
                                data-title="Chile"></option>
                            <option value='cm' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag cm"
                                data-title="Cameroon"></option>
                            <option value='cn' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag cn"
                                data-title="China"></option>
                            <option value='co' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag co"
                                data-title="Colombia"></option>
                            <option value='cr' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag cr"
                                data-title="Costa Rica"></option>
                            <option value='cs' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag cs"
                                data-title="Serbia and Montenegro"></option>
                            <option value='cu' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag cu"
                                data-title="Cuba"></option>
                            <option value='cv' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag cv"
                                data-title="Cape Verde"></option>
                            <option value='cx' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag cx"
                                data-title="Christmas Island"></option>
                            <option value='cy' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag cy"
                                data-title="Cyprus"></option>
                            <option value='cz' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag cz"
                                data-title="Czech Republic"></option>
                            <option value='de' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag de"
                                data-title="Germany"></option>
                            <option value='dj' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag dj"
                                data-title="Djibouti"></option>
                            <option value='dk' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag dk"
                                data-title="Denmark"></option>
                            <option value='dm' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag dm"
                                data-title="Dominica"></option>
                            <option value='do' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag do"
                                data-title="Dominican Republic"></option>
                            <option value='dz' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag dz"
                                data-title="Algeria"></option>
                            <option value='ec' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ec"
                                data-title="Ecuador"></option>
                            <option value='ee' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ee"
                                data-title="Estonia"></option>
                            <option value='eg' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag eg"
                                data-title="Egypt"></option>
                            <option value='eh' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag eh"
                                data-title="Western Sahara"></option>
                            <option value='er' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag er"
                                data-title="Eritrea"></option>
                            <option value='es' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag es"
                                data-title="Spain"></option>
                            <option value='et' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag et"
                                data-title="Ethiopia"></option>
                            <option value='fi' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag fi"
                                data-title="Finland"></option>
                            <option value='fj' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag fj"
                                data-title="Fiji"></option>
                            <option value='fk' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag fk"
                                data-title="Falkland Islands (Malvinas)"></option>
                            <option value='fm' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag fm"
                                data-title="Federated States of Micronesia"></option>
                            <option value='fo' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag fo"
                                data-title="Faroe Islands"></option>
                            <option value='fr' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag fr"
                                data-title="France"></option>
                            <option value='fx' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag fx"
                                data-title="France, Metropolitan"></option>
                            <option value='ga' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ga"
                                data-title="Gabon"></option>
                            <option value='gb' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gb"
                                data-title="Great Britain (UK)"></option>
                            <option value='gd' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gd"
                                data-title="Grenada"></option>
                            <option value='ge' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ge"
                                data-title="Georgia"></option>
                            <option value='gf' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gf"
                                data-title="French Guiana"></option>
                            <option value='gh' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gh"
                                data-title="Ghana"></option>
                            <option value='gi' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gi"
                                data-title="Gibraltar"></option>
                            <option value='gl' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gl"
                                data-title="Greenland"></option>
                            <option value='gm' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gm"
                                data-title="Gambia"></option>
                            <option value='gn' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gn"
                                data-title="Guinea"></option>
                            <option value='gp' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gp"
                                data-title="Guadeloupe"></option>
                            <option value='gq' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gq"
                                data-title="Equatorial Guinea"></option>
                            <option value='gr' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gr"
                                data-title="Greece"></option>
                            <option value='gs' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gs"
                                data-title="S. Georgia and S. Sandwich Islands"></option>
                            <option value='gt' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gt"
                                data-title="Guatemala"></option>
                            <option value='gu' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gu"
                                data-title="Guam"></option>
                            <option value='gw' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gw"
                                data-title="Guinea-Bissau"></option>
                            <option value='gy' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag gy"
                                data-title="Guyana"></option>
                            <option value='hk' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag hk"
                                data-title="Hong Kong"></option>
                            <option value='hm' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag hm"
                                data-title="Heard Island and McDonald Islands"></option>
                            <option value='hn' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag hn"
                                data-title="Honduras"></option>
                            <option value='hr' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag hr"
                                data-title="Croatia (Hrvatska)"></option>
                            <option value='ht' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ht"
                                data-title="Haiti"></option>
                            <option value='hu' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag hu"
                                data-title="Hungary"></option>
                            <option value='id' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag id"
                                data-title="Indonesia"></option>
                            <option value='ie' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ie"
                                data-title="Ireland"></option>
                            <option value='il' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag il"
                                data-title="Israel"></option>
                            <option value='in' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag in"
                                data-title="India" ></option>
                            <option value='io' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag io"
                                data-title="British Indian Ocean Territory"></option>
                            <option value='iq' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag iq"
                                data-title="Iraq"></option>
                            <option value='ir' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ir"
                                data-title="Iran"></option>
                            <option value='is' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag is"
                                data-title="Iceland"></option>
                            <option value='it' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag it"
                                data-title="Italy"></option>
                            <option value='jm' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag jm"
                                data-title="Jamaica"></option>
                            <option value='jo' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag jo"
                                data-title="Jordan"></option>
                            <option value='jp' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag jp"
                                data-title="Japan"></option>
                            <option value='ke' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ke"
                                data-title="Kenya"></option>
                            <option value='kg' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag kg"
                                data-title="Kyrgyzstan"></option>
                            <option value='kh' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag kh"
                                data-title="Cambodia"></option>
                            <option value='ki' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ki"
                                data-title="Kiribati"></option>
                            <option value='km' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag km"
                                data-title="Comoros"></option>
                            <option value='kn' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag kn"
                                data-title="Saint Kitts and Nevis"></option>
                            <option value='kp' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag kp"
                                data-title="Korea (North)"></option>
                            <option value='kr' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag kr"
                                data-title="Korea (South)"></option>
                            <option value='kw' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag kw"
                                data-title="Kuwait"></option>
                            <option value='ky' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ky"
                                data-title="Cayman Islands"></option>
                            <option value='kz' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag kz"
                                data-title="Kazakhstan"></option>
                            <option value='la' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag la"
                                data-title="Laos"></option>
                            <option value='lb' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag lb"
                                data-title="Lebanon"></option>
                            <option value='lc' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag lc"
                                data-title="Saint Lucia"></option>
                            <option value='li' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag li"
                                data-title="Liechtenstein"></option>
                            <option value='lk' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag lk"
                                data-title="Sri Lanka"></option>
                            <option value='lr' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag lr"
                                data-title="Liberia"></option>
                            <option value='ls' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ls"
                                data-title="Lesotho"></option>
                            <option value='lt' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag lt"
                                data-title="Lithuania"></option>
                            <option value='lu' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag lu"
                                data-title="Luxembourg"></option>
                            <option value='lv' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag lv"
                                data-title="Latvia"></option>
                            <option value='ly' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ly"
                                data-title="Libya"></option>
                            <option value='ma' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ma"
                                data-title="Morocco"></option>
                            <option value='mc' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mc"
                                data-title="Monaco"></option>
                            <option value='md' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag md"
                                data-title="Moldova"></option>
                            <option value='mg' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mg"
                                data-title="Madagascar"></option>
                            <option value='mh' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mh"
                                data-title="Marshall Islands"></option>
                            <option value='mk' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mk"
                                data-title="Macedonia"></option>
                            <option value='ml' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ml"
                                data-title="Mali"></option>
                            <option value='mm' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mm"
                                data-title="Myanmar"></option>
                            <option value='mn' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mn"
                                data-title="Mongolia"></option>
                            <option value='mo' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mo"
                                data-title="Macao"></option>
                            <option value='mp' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mp"
                                data-title="Northern Mariana Islands"></option>
                            <option value='mq' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mq"
                                data-title="Martinique"></option>
                            <option value='mr' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mr"
                                data-title="Mauritania"></option>
                            <option value='ms' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ms"
                                data-title="Montserrat"></option>
                            <option value='mt' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mt"
                                data-title="Malta"></option>
                            <option value='mu' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mu"
                                data-title="Mauritius"></option>
                            <option value='mv' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mv"
                                data-title="Maldives"></option>
                            <option value='mw' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mw"
                                data-title="Malawi"></option>
                            <option value='mx' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mx"
                                data-title="Mexico"></option>
                            <option value='my' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag my"
                                data-title="Malaysia"></option>
                            <option value='mz' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag mz"
                                data-title="Mozambique"></option>
                            <option value='na' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag na"
                                data-title="Namibia"></option>
                            <option value='nc' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag nc"
                                data-title="New Caledonia"></option>
                            <option value='ne' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ne"
                                data-title="Niger"></option>
                            <option value='nf' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag nf"
                                data-title="Norfolk Island"></option>
                            <option value='ng' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ng"
                                data-title="Nigeria"></option>
                            <option value='ni' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ni"
                                data-title="Nicaragua"></option>
                            <option value='nl' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag nl"
                                data-title="Netherlands">
                                <option>
                                    <option value='no' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag no"
                                        data-title="Norway"></option>
                                    <option value='np' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag np"
                                        data-title="Nepal"></option>
                                    <option value='nr' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag nr"
                                        data-title="Nauru"></option>
                                    <option value='nu' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag nu"
                                        data-title="Niue"></option>
                                    <option value='nz' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag nz"
                                        data-title="New Zealand (Aotearoa)"></option>
                                    <option value='om' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag om"
                                        data-title="Oman"></option>
                                    <option value='pa' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag pa"
                                        data-title="Panama"></option>
                                    <option value='pe' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag pe"
                                        data-title="Peru"></option>
                                    <option value='pf' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag pf"
                                        data-title="French Polynesia"></option>
                                    <option value='pg' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag pg"
                                        data-title="Papua New Guinea"></option>
                                    <option value='ph' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ph"
                                        data-title="Philippines"></option>
                                    <option value='pk' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag pk"
                                        data-title="Pakistan"></option>
                                    <option value='pl' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag pl"
                                        data-title="Poland"></option>
                                    <option value='pm' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag pm"
                                        data-title="Saint Pierre and Miquelon"></option>
                                    <option value='pn' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag pn"
                                        data-title="Pitcairn"></option>
                                    <option value='pr' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag pr"
                                        data-title="Puerto Rico"></option>
                                    <option value='ps' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ps"
                                        data-title="Palestinian Territory"></option>
                                    <option value='pt' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag pt"
                                        data-title="Portugal"></option>
                                    <option value='pw' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag pw"
                                        data-title="Palau"></option>
                                    <option value='py' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag py"
                                        data-title="Paraguay"></option>
                                    <option value='qa' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag qa"
                                        data-title="Qatar"></option>
                                    <option value='re' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag re"
                                        data-title="Reunion"></option>
                                    <option value='ro' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ro"
                                        data-title="Romania"></option>
                                    <option value='ru' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ru"
                                        data-title="Russian Federation"></option>
                                    <option value='rw' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag rw"
                                        data-title="Rwanda"></option>
                                    <option value='sa' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sa"
                                        data-title="Saudi Arabia"></option>
                                    <option value='sb' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sb"
                                        data-title="Solomon Islands"></option>
                                    <option value='sc' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sc"
                                        data-title="Seychelles"></option>
                                    <option value='sd' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sd"
                                        data-title="Sudan"></option>
                                    <option value='se' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag se"
                                        data-title="Sweden"></option>
                                    <option value='sg' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sg"
                                        data-title="Singapore"></option>
                                    <option value='sh' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sh"
                                        data-title="Saint Helena"></option>
                                    <option value='si' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag si"
                                        data-title="Slovenia"></option>
                                    <option value='sj' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sj"
                                        data-title="Svalbard and Jan Mayen"></option>
                                    <option value='sk' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sk"
                                        data-title="Slovakia"></option>
                                    <option value='sl' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sl"
                                        data-title="Sierra Leone"></option>
                                    <option value='sm' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sm"
                                        data-title="San Marino"></option>
                                    <option value='sn' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sn"
                                        data-title="Senegal"></option>
                                    <option value='so' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag so"
                                        data-title="Somalia"></option>
                                    <option value='sr' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sr"
                                        data-title="Suriname"></option>
                                    <option value='st' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag st"
                                        data-title="Sao Tome and Principe"></option>
                                    <option value='su' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag su"
                                        data-title="USSR (former)"></option>
                                    <option value='sv' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sv"
                                        data-title="El Salvador"></option>
                                    <option value='sy' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sy"
                                        data-title="Syria"></option>
                                    <option value='sz' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag sz"
                                        data-title="Swaziland"></option>
                                    <option value='tc' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag tc"
                                        data-title="Turks and Caicos Islands"></option>
                                    <option value='td' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag td"
                                        data-title="Chad"></option>
                                    <option value='tf' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag tf"
                                        data-title="French Southern Territories"></option>
                                    <option value='tg' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag tg"
                                        data-title="Togo"></option>
                                    <option value='th' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag th"
                                        data-title="Thailand"></option>
                                    <option value='tj' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag tj"
                                        data-title="Tajikistan"></option>
                                    <option value='tk' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag tk"
                                        data-title="Tokelau"></option>
                                    <option value='tl' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag tl"
                                        data-title="Timor-Leste"></option>
                                    <option value='tm' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag tm"
                                        data-title="Turkmenistan"></option>
                                    <option value='tn' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag tn"
                                        data-title="Tunisia"></option>
                                    <option value='to' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag to"
                                        data-title="Tonga"></option>
                                    <option value='tp' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag tp"
                                        data-title="East Timor"></option>
                                    <option value='tr' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag tr"
                                        data-title="Turkey"></option>
                                    <option value='tt' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag tt"
                                        data-title="Trinidad and Tobago"></option>
                                    <option value='tv' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag tv"
                                        data-title="Tuvalu"></option>
                                    <option value='tw' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag tw"
                                        data-title="Taiwan"></option>
                                    <option value='tz' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag tz"
                                        data-title="Tanzania"></option>
                                    <option value='ua' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ua"
                                        data-title="Ukraine"></option>
                                    <option value='ug' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ug"
                                        data-title="Uganda"></option>
                                    <option value='uk' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag uk"
                                        data-title="United Kingdom" selected="selected"></option>
                                    <option value='um' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag um"
                                        data-title="United States Minor Outlying Islands"></option>
                                    <option value='us' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag us"
                                        data-title="United States"></option>
                                    <option value='uy' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag uy"
                                        data-title="Uruguay"></option>
                                    <option value='uz' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag uz"
                                        data-title="Uzbekistan"></option>
                                    <option value='va' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag va"
                                        data-title="Vatican City State (Holy See)"></option>
                                    <option value='vc' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag vc"
                                        data-title="Saint Vincent and the Grenadines"></option>
                                    <option value='ve' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ve"
                                        data-title="Venezuela"></option>
                                    <option value='vg' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag vg"
                                        data-title="Virgin Islands (British)"></option>
                                    <option value='vi' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag vi"
                                        data-title="Virgin Islands (U.S.)"></option>
                                    <option value='vn' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag vn"
                                        data-title="Viet Nam"></option>
                                    <option value='vu' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag vu"
                                        data-title="Vanuatu"></option>
                                    <option value='wf' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag wf"
                                        data-title="Wallis and Futuna"></option>
                                    <option value='ws' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ws"
                                        data-title="Samoa"></option>
                                    <option value='ye' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag ye"
                                        data-title="Yemen"></option>
                                    <option value='yt' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag yt"
                                        data-title="Mayotte"></option>
                                    <option value='yu' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag yu"
                                        data-title="Yugoslavia (former)"></option>
                                    <option value='za' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag za"
                                        data-title="South Africa"></option>
                                    <option value='zm' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag zm"
                                        data-title="Zambia"></option>
                                    <option value='zr' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag zr"
                                        data-title="Zaire (former)"></option>
                                    <option value='zw' data-image="../CommonFiles/flagdropdown/icons/blank.gif" data-imagecss="flag zw"
                                        data-title="Zimbabwe"></option>
                        </select>
                    </span>-->
                </div>
            </div>
        </div>
    </div>
</div>
<div class="LogoMenuRow">
    <div class="container">
        <div class="col-md-2 logo">
            <%--  <a href='<%= ResolveUrl("../Pages/frmDefault.aspx")%>'>
               
               <img src='<%= ResolveUrl("../CommonFiles/img/logo.jpg")%>' alt="" /></a></div>--%>
            <%--<a href='<%= ResolveUrl("../../homepage/home.html")%>'>--%>
            <a href='<%= ResolveUrl("../../OnlinePortal/NewPages/Home.aspx")%>'>
                <img src='<%= ResolveUrl("../Includes/images/logo.jpg")%>' alt="" /></a></div>
        <%--<a href='<%= ResolveUrl("/OnlinePortal/newPages/Home.aspx")%>'>
                <img src='<%= ResolveUrl("../Includes/images/logo.jpg")%>' alt="" /></a></div>--%>
        <div class="col-md-7">
            <div class="rmm style">
                <ul id="MainMenu">
                </ul>
            </div>
        </div>
        <div class="col-md-3">
            <div class="searchcontainer">
                <input type="hidden" id="hdnStatus" />
                <input type="hidden" id="lbluername" />
                <input type="hidden" id="lblUserid" />
            </div>
        </div>
    </div>
</div>
<!-- Header End Here -->
