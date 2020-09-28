### Import/Export Igor Text (.itx format)

If you need to work with Igor Program, **ARPES Python Tools** provides a way to import and export data in Igor text (**.itx**) format. **import_itx** and **export_itx** functions can import and export 1-dimensionl, 2-dimensionl, and 3-dimensionl data, respectively.
```py
import arpespythontools as arp  

# import itx file
data, x = arp.import_itx('path/data.itx') # 1D wave
data, x, y = arp.import_itx('path/data.itx') # 2D wave
data, x, y, z = arp.import_itx('path/data.itx') # 3D wave

# export itx file
export_itx("path/data.itx", data, x=[], y=[], z =[], wave_name='wave',\  
x_label='x-label', y_label='y-label', z_label='z-label')
```
While importing, **data** contains the 1D, 2D or 3D data. **x, y, z** are the corresponding axis scaling. While exporting, if you do not have axis scaling data, you do not need to provide x, y, or z. In case x, y, z is not provided the default scaling (dim offset = 0, and dim delta = 1) would be applied. Similarly, you can provide wave name, and axis labels (optional).
