using Fullstack.API.Data;
using Fullstack.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Fullstack.API.Controllers
{
    [ApiController]
    [Route("api/employees")]
    public class EmployeesController : Controller
    {
        private readonly FullstackDbContext _fullStackDbContext;
        public EmployeesController(FullstackDbContext fullstackDbContext)
        {
            _fullStackDbContext = fullstackDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees= await _fullStackDbContext.Employees.ToListAsync();

            return Ok(employees); 
        }
        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee employeeRequest)
        {

            employeeRequest.Id = Guid.NewGuid();
            await _fullStackDbContext.Employees.AddAsync(employeeRequest);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(employeeRequest);

        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetEmployee([FromRoute]Guid id)
        {
            var employee= await _fullStackDbContext.Employees.FirstOrDefaultAsync(x=> x.Id== id);
            if(employee==null)
            {
                return NotFound();
            }

            return Ok(employee);
        }
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id,Employee updateEmployeeRequest)
        {
            var employee = await _fullStackDbContext.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            
            employee.Name = updateEmployeeRequest.Name;
            employee.Email = updateEmployeeRequest.Email;
            employee.Department = updateEmployeeRequest.Department;
            employee.Phone = updateEmployeeRequest.Phone;
            employee.Salary = updateEmployeeRequest.Salary;

            await _fullStackDbContext.SaveChangesAsync();

            return Ok(employee);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var employee = await _fullStackDbContext.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            

            _fullStackDbContext.Remove(employee);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(employee);
        }
    }
}
