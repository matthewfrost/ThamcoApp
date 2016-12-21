﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOs;
namespace IDataSources
{
    public interface IWrappingSource
    {
        List<Wrapping> getAll();

        Wrapping getByID(int ID);
    }
}
