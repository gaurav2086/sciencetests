using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using QuestionBank.Common;
using QuestionBank.DL;

namespace QuestionBank.BL.Security
{
    public class ClsAuthentication
    {
        ClsDataAccess objDB;

        public string QBAdmin_Login(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";

            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.QBAdmin_Login, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }
        }

        public string QBMenu(string inXML, OutputType format)
        {
            string strOutput;
            strOutput = "";
            try
            {
                objDB = new ClsDataAccess();
                strOutput = objDB.sqlSelect(Select.select_Menu, inXML, format);
                return strOutput;
            }
            catch
            {
                return strOutput;
            }
            finally
            {
                objDB = null;
            }

        }
    }
}
